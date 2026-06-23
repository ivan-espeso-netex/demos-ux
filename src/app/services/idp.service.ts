import { Injectable } from '@angular/core';

export interface IIdpAction {
  id: number;
  title: string;
  objective: string;
  timeline: string;
  kpis: string[];
}

@Injectable({ providedIn: 'root' })
export class IdpService {
  private _actionsMap: Map<number, IIdpAction[]> = new Map([
    [
      101,
      [
        {
          id: 1,
          title: 'Data-Driven Decision Documentation',
          objective:
            'Build a consistent practice of documenting data-driven decisions, making the link between analysis and operational outcomes explicit and visible to stakeholders.',
          timeline: '6 months',
          kpis: [
            'Present one data-informed recommendation per half to a cross-functional or senior audience',
            'At least 2 documented case studies showing before/after operational metrics',
          ],
        },
        {
          id: 2,
          title: 'Structured Stakeholder Feedback',
          objective: 'Build a consistent feedback loop with multiple stakeholders across functions.',
          timeline: '6 months',
          kpis: [
            'Feedback covers at least 3 different functions or departments',
            'Monthly review sessions with documented outcomes',
          ],
        },
      ],
    ],
  ]);

  private _nextId = 100;

  getActions(userId: number): IIdpAction[] {
    return this._actionsMap.get(userId) ?? [];
  }

  addAction(userId: number, action: Omit<IIdpAction, 'id'>): IIdpAction {
    const newAction: IIdpAction = { ...action, id: ++this._nextId };
    const current = this._actionsMap.get(userId) ?? [];
    this._actionsMap.set(userId, [...current, newAction]);
    return newAction;
  }

  updateAction(userId: number, updated: IIdpAction): void {
    const current = this._actionsMap.get(userId) ?? [];
    this._actionsMap.set(
      userId,
      current.map(a => (a.id === updated.id ? updated : a))
    );
  }

  deleteAction(userId: number, actionId: number): void {
    const current = this._actionsMap.get(userId) ?? [];
    this._actionsMap.set(
      userId,
      current.filter(a => a.id !== actionId)
    );
  }
}
