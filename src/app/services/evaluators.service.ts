import { Injectable, signal } from '@angular/core';

export interface IEvaluator {
  id: number;
  name: string;
  username: string;
  range: string;
  evaluacion: 'NOT STARTED' | 'IN PROGRESS' | 'COMPLETED';
  result: string;
}

export interface IAvailableEvaluator {
  id: number;
  name: string;
  username: string;
}

export interface IEvaluatorResult {
  id: number;
  name: string;
  username: string;
  range: string;
  evaluationStatus: 'FINISHED' | 'IN PROGRESS' | 'NOT STARTED';
  result: string;
}

export interface ISkillResult {
  name: string;
  level: string;
  levelValue: number; // 0=Does not exist, 1=Basic, 2=Medium, 3=Advanced, 4=Expert
  required: string;
}

export interface IEvaluationEvaluator {
  id: number;
  name: string;
  username: string;
  assignedCount: number;
  totalUsers: number;
  evaluatedCount: number;
  assignedUserIds: number[];
}

@Injectable({ providedIn: 'root' })
export class EvaluatorsService {
  // Results for launched evaluation (id: 1) target users 101–104
  private readonly _mockEvaluatorResults: Record<number, IEvaluatorResult[]> = {
    101: [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluationStatus: 'FINISHED', result: '92%' },
      { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz', range: 'Pair', evaluationStatus: 'FINISHED', result: '88%' },
      { id: 12, name: 'Ana Martinez', username: 'ana.martinez', range: 'Pair', evaluationStatus: 'FINISHED', result: '85%' },
    ],
    102: [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluationStatus: 'FINISHED', result: '74%' },
      { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz', range: 'Pair', evaluationStatus: 'IN PROGRESS', result: '-' },
    ],
    103: [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluationStatus: 'NOT STARTED', result: '-' },
      { id: 13, name: 'Pedro Sánchez', username: 'pedro.sanchez', range: 'Pair', evaluationStatus: 'NOT STARTED', result: '-' },
    ],
    104: [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluationStatus: 'NOT STARTED', result: '-' },
      { id: 13, name: 'Pedro Sánchez', username: 'pedro.sanchez', range: 'Pair', evaluationStatus: 'NOT STARTED', result: '-' },
    ],
  };

  private readonly _mockSkillResults: Record<number, ISkillResult[]> = {
    101: [
      { name: 'User Research Methods', level: 'Expert', levelValue: 4, required: 'Advanced' },
      { name: 'Prototyping & Wireframing', level: 'Expert', levelValue: 4, required: 'Advanced' },
      { name: 'Interaction Design', level: 'Advanced', levelValue: 3, required: 'Advanced' },
      { name: 'Usability Testing', level: 'Advanced', levelValue: 3, required: 'Medium' },
      { name: 'Design Systems', level: 'Medium', levelValue: 2, required: 'Advanced' },
      { name: 'Accessibility Standards', level: 'Basic', levelValue: 1, required: 'Medium' },
      { name: 'Stakeholder Communication', level: 'Expert', levelValue: 4, required: 'Advanced' },
    ],
    102: [
      { name: 'User Research Methods', level: 'Advanced', levelValue: 3, required: 'Advanced' },
      { name: 'Prototyping & Wireframing', level: 'Medium', levelValue: 2, required: 'Advanced' },
      { name: 'Interaction Design', level: 'Advanced', levelValue: 3, required: 'Advanced' },
      { name: 'Usability Testing', level: 'Medium', levelValue: 2, required: 'Medium' },
      { name: 'Design Systems', level: 'Does not exist', levelValue: 0, required: 'Advanced' },
      { name: 'Accessibility Standards', level: 'Basic', levelValue: 1, required: 'Medium' },
      { name: 'Stakeholder Communication', level: 'Medium', levelValue: 2, required: 'Advanced' },
    ],
  };

  getEvaluatorResults(_evaluationId: number, userId: number): IEvaluatorResult[] {
    return this._mockEvaluatorResults[userId] || [];
  }

  getSkillResults(_evaluationId: number, userId: number): ISkillResult[] {
    return this._mockSkillResults[userId] || [];
  }

  private readonly _availableEvaluators: IAvailableEvaluator[] = [
    { id: 10, name: 'Maria Garcia', username: 'maria.garcia' },
    { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz' },
    { id: 12, name: 'Ana Martinez', username: 'ana.martinez' },
    { id: 13, name: 'Pedro Sánchez', username: 'pedro.sanchez' },
    { id: 14, name: 'Laura Blanco', username: 'laura.blanco' },
    { id: 15, name: 'Javier Moreno', username: 'javier.moreno' },
  ];

  private readonly _evaluatorsMap = signal<Record<string, IEvaluator[]>>({
    // Pre-seeded evaluators for IN PROGRESS evaluation (id: 1), target users 101-104
    '1_101_superiors': [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluacion: 'COMPLETED', result: '92%' },
    ],
    '1_101_pairs': [
      { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz', range: 'Pair', evaluacion: 'COMPLETED', result: '88%' },
      { id: 12, name: 'Ana Martinez', username: 'ana.martinez', range: 'Pair', evaluacion: 'COMPLETED', result: '85%' },
    ],
    '1_102_superiors': [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluacion: 'COMPLETED', result: '74%' },
    ],
    '1_102_pairs': [
      { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz', range: 'Pair', evaluacion: 'IN PROGRESS', result: '-' },
    ],
    '1_103_superiors': [
      { id: 14, name: 'Laura Blanco', username: 'laura.blanco', range: 'Superior', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '1_103_pairs': [
      { id: 15, name: 'Javier Moreno', username: 'javier.moreno', range: 'Pair', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '1_104_superiors': [
      { id: 14, name: 'Laura Blanco', username: 'laura.blanco', range: 'Superior', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '1_104_pairs': [
      { id: 15, name: 'Javier Moreno', username: 'javier.moreno', range: 'Pair', evaluacion: 'NOT STARTED', result: '-' },
    ],
    // Pre-seeded evaluators for DRAFT evaluation (id: 2)
    '2_1_superiors': [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '2_1_pairs': [
      { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz', range: 'Pair', evaluacion: 'NOT STARTED', result: '-' },
      { id: 12, name: 'Ana Martinez', username: 'ana.martinez', range: 'Pair', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '2_2_superiors': [
      { id: 10, name: 'Maria Garcia', username: 'maria.garcia', range: 'Superior', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '2_2_pairs': [
      { id: 11, name: 'Carlos Ruiz', username: 'carlos.ruiz', range: 'Pair', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '2_4_superiors': [
      { id: 14, name: 'Laura Blanco', username: 'laura.blanco', range: 'Superior', evaluacion: 'NOT STARTED', result: '-' },
    ],
    '2_4_pairs': [],
  });

  private key(evaluationId: number, targetUserId: number, field: 'superiors' | 'pairs'): string {
    return `${evaluationId}_${targetUserId}_${field}`;
  }

  getAvailableEvaluators(): IAvailableEvaluator[] {
    return this._availableEvaluators;
  }

  getNotAddedEvaluators(evaluationId: number, targetUserId: number, field: 'superiors' | 'pairs'): IAvailableEvaluator[] {
    const addedIds = new Set(this.getEvaluators(evaluationId, targetUserId, field).map(e => e.id));
    return this._availableEvaluators.filter(e => !addedIds.has(e.id));
  }

  getEvaluators(evaluationId: number, targetUserId: number, field: 'superiors' | 'pairs'): IEvaluator[] {
    return this._evaluatorsMap()[this.key(evaluationId, targetUserId, field)] || [];
  }

  getEvaluatorCount(evaluationId: number, targetUserId: number, field: 'superiors' | 'pairs'): number {
    return this.getEvaluators(evaluationId, targetUserId, field).length;
  }

  getAllEvaluators(evaluationId: number, targetUserId: number): IEvaluator[] {
    return [
      ...this.getEvaluators(evaluationId, targetUserId, 'superiors'),
      ...this.getEvaluators(evaluationId, targetUserId, 'pairs'),
    ];
  }

  getEvaluatorsForEvaluation(evaluationId: number, targetUserIds: number[]): IEvaluationEvaluator[] {
    const evaluatorMap = new Map<number, {
      name: string; username: string; count: number; evaluatedCount: number; assignedUserIds: number[];
    }>();

    for (const userId of targetUserIds) {
      const all = [
        ...this.getEvaluators(evaluationId, userId, 'superiors'),
        ...this.getEvaluators(evaluationId, userId, 'pairs'),
      ];
      const seen = new Set<number>();
      for (const e of all) {
        if (!seen.has(e.id)) {
          seen.add(e.id);
          const isCompleted = e.evaluacion === 'COMPLETED';
          const entry = evaluatorMap.get(e.id);
          if (entry) {
            entry.count++;
            if (isCompleted) entry.evaluatedCount++;
            entry.assignedUserIds.push(userId);
          } else {
            evaluatorMap.set(e.id, {
              name: e.name,
              username: e.username,
              count: 1,
              evaluatedCount: isCompleted ? 1 : 0,
              assignedUserIds: [userId],
            });
          }
        }
      }
    }

    return Array.from(evaluatorMap.entries()).map(([id, { name, username, count, evaluatedCount, assignedUserIds }]) => ({
      id,
      name,
      username,
      assignedCount: count,
      totalUsers: targetUserIds.length,
      evaluatedCount,
      assignedUserIds,
    }));
  }

  addEvaluators(evaluationId: number, targetUserId: number, field: 'superiors' | 'pairs', evaluators: IAvailableEvaluator[]): void {
    const k = this.key(evaluationId, targetUserId, field);
    const existing = this.getEvaluators(evaluationId, targetUserId, field);
    const existingIds = new Set(existing.map(e => e.id));
    const range = field === 'superiors' ? 'Superior' : 'Pair';
    const newEvaluators: IEvaluator[] = evaluators
      .filter(e => !existingIds.has(e.id))
      .map(e => ({
        ...e,
        range,
        evaluacion: 'NOT STARTED' as const,
        result: '-',
      }));
    this._evaluatorsMap.update(map => ({
      ...map,
      [k]: [...existing, ...newEvaluators],
    }));
  }

  addEvaluatorsToMultipleUsers(
    evaluationId: number,
    targetUserIds: number[],
    field: 'superiors' | 'pairs',
    evaluators: IAvailableEvaluator[],
  ): void {
    for (const userId of targetUserIds) {
      this.addEvaluators(evaluationId, userId, field, evaluators);
    }
  }
}
