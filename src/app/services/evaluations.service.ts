import { Injectable, signal } from '@angular/core';

export interface IEvaluation {
  id: number;
  name: string;
  evaluationType: string;
  evaluationTypeName: string;
  evaluator: string;
  startDate: string;
  endDate: string;
  dateInit?: string;
  dateEnd?: string;
  evaluated: string;
  status: 'IN PROGRESS' | 'ENDING' | 'COMPLETED' | 'PENDING' | 'DRAFT' | 'CLOSED';
  createdBy: string;
  modified: string;
  description?: string;
  notifyEvaluator?: boolean;
  notifyUser?: boolean;
  allowManagerActionPlan?: boolean;
  progress?: number;
}

@Injectable({ providedIn: 'root' })
export class EvaluationsService {
  private nextId = 3;

  private readonly _evaluations = signal<IEvaluation[]>([
    {
      id: 1,
      name: 'Product Design Competencies Q2',
      evaluationType: '180',
      evaluationTypeName: '180° (superiors & pairs)',
      evaluator: 'Iván Espeso',
      startDate: '10/03/2025',
      endDate: '30/06/2025',
      evaluated: '2/4 users',
      status: 'IN PROGRESS',
      createdBy: 'Iván Espeso',
      modified: '10/03/2025',
      description: 'Evaluación semestral de competencias del equipo de diseño de producto. Se evalúan tanto habilidades técnicas como de comunicación y liderazgo.',
      notifyEvaluator: true,
      notifyUser: true,
      progress: 35,
    },
    {
      id: 2,
      name: 'Frontend Skills Assessment 2025',
      evaluationType: '180',
      evaluationTypeName: '180° (superiors & pairs)',
      evaluator: 'Iván Espeso',
      startDate: '01/07/2025',
      endDate: '31/08/2025',
      evaluated: '0/3 users',
      status: 'DRAFT',
      createdBy: 'Iván Espeso',
      modified: '05/06/2025',
      description: 'Evaluación técnica del equipo de frontend para identificar brechas de competencias y planificar formaciones para el segundo semestre.',
      notifyEvaluator: true,
      notifyUser: false,
      progress: 0,
    },
  ]);

  readonly evaluations = this._evaluations.asReadonly();

  getById(id: number): IEvaluation | undefined {
    return this._evaluations().find((e) => e.id === id);
  }

  create(data: Partial<IEvaluation>): IEvaluation {
    const evaluation: IEvaluation = {
      id: this.nextId++,
      name: data.name || 'New evaluation',
      evaluationType: data.evaluationType || '180',
      evaluationTypeName: this.getTypeName(data.evaluationType || '180'),
      evaluator: 'Iván Espeso',
      startDate: data.startDate || '-',
      endDate: data.endDate || '-',
      dateInit: data.dateInit || '-',
      dateEnd: data.dateEnd || '-',
      evaluated: '0/0 users',
      status: 'DRAFT',
      createdBy: 'Iván Espeso',
      modified: new Date().toLocaleDateString('es-ES'),
      description: data.description || '',
      notifyEvaluator: data.notifyEvaluator || false,
      notifyUser: data.notifyUser || false,
      allowManagerActionPlan: data.allowManagerActionPlan || false,
      progress: 0,
    };
    this._evaluations.update((list) => [...list, evaluation]);
    return evaluation;
  }

  update(id: number, data: Partial<IEvaluation>): void {
    this._evaluations.update((list) =>
      list.map((e) =>
        e.id === id
          ? {
              ...e,
              ...data,
              evaluationTypeName: this.getTypeName(data.evaluationType || e.evaluationType),
              modified: new Date().toLocaleDateString('es-ES'),
            }
          : e
      )
    );
  }

  delete(id: number): void {
    this._evaluations.update((list) => list.filter((e) => e.id !== id));
  }

  private getTypeName(type: string): string {
    const names: Record<string, string> = {
      '0': '0º (Autoevaluation)',
      '90': '90º (Superior)',
      '180': '180° (superiors & pairs)',
      '360': '360º (Superior, pairs & subordinates)',
    };
    return names[type] || type;
  }
}
