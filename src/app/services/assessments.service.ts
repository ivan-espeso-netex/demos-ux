import { Injectable, signal } from '@angular/core';

export interface IAssessmentRow {
  id: string;
  name: string;
  jobRole: string;
  evaluatorType: string;
  creator: string;
  modified: string;
  status: 'PENDING' | 'READY';
}

@Injectable({ providedIn: 'root' })
export class AssessmentsService {
  private readonly _assessmentsMap = signal<Record<string, IAssessmentRow[]>>({
    // Evaluation 1 (IN PROGRESS) — all READY, roles: UX Designer, Frontend Developer, type: 180°
    1: [
      { id: '1_UX Designer_Superior',       name: 'UX Designer - Superior',       jobRole: 'UX Designer',       evaluatorType: 'Superior', creator: 'Iván Espeso', modified: '08/03/2025', status: 'READY' },
      { id: '1_UX Designer_Pair',           name: 'UX Designer - Pair',           jobRole: 'UX Designer',       evaluatorType: 'Pair',     creator: 'Iván Espeso', modified: '08/03/2025', status: 'READY' },
      { id: '1_Frontend Developer_Superior', name: 'Frontend Developer - Superior', jobRole: 'Frontend Developer', evaluatorType: 'Superior', creator: 'Iván Espeso', modified: '09/03/2025', status: 'READY' },
      { id: '1_Frontend Developer_Pair',     name: 'Frontend Developer - Pair',     jobRole: 'Frontend Developer', evaluatorType: 'Pair',     creator: 'Iván Espeso', modified: '09/03/2025', status: 'READY' },
    ],
    // Evaluation 2 (DRAFT) — Superior READY, Pair still PENDING
    2: [
      { id: '2_UX Designer_Superior',       name: 'UX Designer - Superior',       jobRole: 'UX Designer',       evaluatorType: 'Superior', creator: 'Iván Espeso', modified: '05/06/2025', status: 'READY' },
      { id: '2_Frontend Developer_Superior', name: 'Frontend Developer - Superior', jobRole: 'Frontend Developer', evaluatorType: 'Superior', creator: 'Iván Espeso', modified: '05/06/2025', status: 'READY' },
    ],
  });

  getAssessments(evaluationId: number, jobRoles: string[], evaluatorTypes: string[]): IAssessmentRow[] {
    const stored = this._assessmentsMap()[evaluationId] || [];
    const uniqueRoles = [...new Set(jobRoles.filter(r => r && r.trim()))];

    const rows: IAssessmentRow[] = [];
    for (const role of uniqueRoles) {
      for (const evalType of evaluatorTypes) {
        const id = `${evaluationId}_${role}_${evalType}`;
        const stored_ = stored.find(r => r.id === id);
        rows.push({
          id,
          name: stored_?.name ?? `${role} - ${evalType}`,
          jobRole: role,
          evaluatorType: evalType,
          creator: stored_?.creator ?? '-',
          modified: stored_?.modified ?? '-',
          status: stored_?.status ?? 'PENDING',
        });
      }
    }
    return rows;
  }

  create(evaluationId: number, rowId: string, creator: string): void {
    this._updateRow(evaluationId, rowId, {
      status: 'READY',
      creator,
      modified: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }),
    });
  }

  quit(evaluationId: number, rowId: string): void {
    this._updateRow(evaluationId, rowId, {
      status: 'PENDING',
      creator: '-',
      modified: '-',
    });
  }

  evaluatorTypesForCode(code: string): string[] {
    switch (code) {
      case '0':   return ['Autoevaluación'];
      case '90':  return ['Superior'];
      case '180': return ['Superior', 'Pair'];
      case '360': return ['Superior', 'Pair', 'Subordinate', 'Autoevaluación'];
      default:    return ['Superior'];
    }
  }

  allAssessmentsReady(evaluationId: number, jobRoles: string[], evaluationType: string): boolean {
    const types = this.evaluatorTypesForCode(evaluationType);
    const rows = this.getAssessments(evaluationId, jobRoles, types);
    return rows.length > 0 && rows.every(r => r.status === 'READY');
  }

  private _updateRow(evaluationId: number, rowId: string, patch: Partial<IAssessmentRow>): void {
    this._assessmentsMap.update(map => {
      const rows = map[evaluationId] || [];
      const exists = rows.find(r => r.id === rowId);
      const updated = exists
        ? rows.map(r => r.id === rowId ? { ...r, ...patch } : r)
        : [...rows, { ...this._newRowFromId(evaluationId, rowId), ...patch }];
      return { ...map, [evaluationId]: updated };
    });
  }

  // Deriva name/jobRole/evaluatorType del id (`${evaluationId}_${role}_${type}`)
  // para que una fila creada "al vuelo" (no pre-cargada en el seed) quede completa
  // y la columna Name no aparezca en blanco tras pulsar Create.
  private _newRowFromId(evaluationId: number, rowId: string): IAssessmentRow {
    const prefix = `${evaluationId}_`;
    const rest = rowId.startsWith(prefix) ? rowId.slice(prefix.length) : rowId;
    const lastSep = rest.lastIndexOf('_');
    const jobRole = lastSep >= 0 ? rest.slice(0, lastSep) : rest;
    const evaluatorType = lastSep >= 0 ? rest.slice(lastSep + 1) : '';
    return {
      id: rowId,
      name: `${jobRole} - ${evaluatorType}`,
      jobRole,
      evaluatorType,
      creator: '-',
      modified: '-',
      status: 'PENDING',
    };
  }
}
