import { Injectable, signal } from '@angular/core';

export interface IAssessmentTemplate {
  id: number;
  jobRole: string;
  evaluationType: string;
  creator: string;
  modified: string;
  /** Ids de las evaluaciones donde se está utilizando este assessment. */
  usedInEvaluationIds: number[];
}

@Injectable({ providedIn: 'root' })
export class AssessmentTemplatesService {
  private nextId = 3;

  private readonly _templates = signal<IAssessmentTemplate[]>([
    {
      id: 1,
      jobRole: 'UX designer',
      evaluationType: 'Autoevaluation',
      creator: 'Ivan Espeso',
      modified: '12/05/2026',
      usedInEvaluationIds: [1, 2], // en uso -> no se puede borrar
    },
    {
      id: 2,
      jobRole: 'UX designer',
      evaluationType: 'Reviewed by another',
      creator: 'Ivan Espeso',
      modified: '12/05/2026',
      usedInEvaluationIds: [], // sin uso -> se puede borrar
    },
  ]);

  readonly templates = this._templates.asReadonly();

  getById(id: number): IAssessmentTemplate | undefined {
    return this._templates().find(t => t.id === id);
  }

  isInUse(id: number): boolean {
    const t = this.getById(id);
    return !!t && t.usedInEvaluationIds.length > 0;
  }

  /** Borra el assessment solo si no está en uso. Devuelve true si se borró. */
  delete(id: number): boolean {
    if (this.isInUse(id)) return false;
    this._templates.update(list => list.filter(t => t.id !== id));
    return true;
  }
}
