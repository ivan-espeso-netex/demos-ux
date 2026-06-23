import { Injectable, signal } from '@angular/core';

export interface IAvailableUser {
  id: number;
  name: string;
  username: string;
  jobRole: string;
}

export interface ITargetUser {
  id: number;
  name: string;
  username: string;
  jobRole: string;
  superiorsEvals: string;
  pairsEvals: string;
  progress: 'NOT STARTED' | 'IN PROGRESS' | 'COMPLETED' | 'FINISHED';
  jobAffinity: string;
  photo?: string;
}

@Injectable({ providedIn: 'root' })
export class TargetUsersService {
  private readonly _availableUsers: IAvailableUser[] = [
    { id: 1, name: 'Norman Steeves', username: 'norman.steeves', jobRole: 'UX Designer' },
    { id: 2, name: 'Heather Morrison', username: 'heather.morrison', jobRole: 'UX Designer' },
    { id: 3, name: 'Camila Edwards', username: 'camila.edwards', jobRole: 'UX Designer' },
    { id: 4, name: 'Max Barrett', username: 'max.barrett', jobRole: 'Frontend Developer' },
    { id: 5, name: 'Mitchell Walters', username: 'mitchell.walters', jobRole: 'Frontend Developer' },
    { id: 6, name: 'Alan Lopez', username: 'alan.lopez', jobRole: 'Frontend Developer' },
  ];

  // Pre-seeded target users for the IN PROGRESS evaluation (id: 1)
  private readonly _launchedMockUsers: Record<number, ITargetUser[]> = {
    1: [
      { id: 101, name: 'Raquel Lopez Tijuan', username: 'raquel.lopez', jobRole: 'UX Designer', superiorsEvals: '1/1', pairsEvals: '2/2', progress: 'FINISHED', jobAffinity: '80%' },
      { id: 102, name: 'Carlos Mendez', username: 'carlos.mendez', jobRole: 'UX Designer', superiorsEvals: '1/1', pairsEvals: '1/2', progress: 'IN PROGRESS', jobAffinity: '-' },
      { id: 103, name: 'Ana Solano', username: 'ana.solano', jobRole: 'Frontend Developer', superiorsEvals: '0/1', pairsEvals: '0/2', progress: 'NOT STARTED', jobAffinity: '-' },
      { id: 104, name: 'David Ruiz', username: 'david.ruiz', jobRole: 'Frontend Developer', superiorsEvals: '0/1', pairsEvals: '0/2', progress: 'NOT STARTED', jobAffinity: '-' },
    ],
  };

  private readonly _targetUsersMap = signal<Record<number, ITargetUser[]>>({
    // Pre-seeded target users for the DRAFT evaluation (id: 2)
    2: [
      { id: 1, name: 'Norman Steeves', username: 'norman.steeves', jobRole: 'UX Designer', superiorsEvals: '0/1', pairsEvals: '0/2', progress: 'NOT STARTED', jobAffinity: '-' },
      { id: 2, name: 'Heather Morrison', username: 'heather.morrison', jobRole: 'UX Designer', superiorsEvals: '0/1', pairsEvals: '0/2', progress: 'NOT STARTED', jobAffinity: '-' },
      { id: 4, name: 'Max Barrett', username: 'max.barrett', jobRole: 'Frontend Developer', superiorsEvals: '0/1', pairsEvals: '0/2', progress: 'NOT STARTED', jobAffinity: '-' },
    ],
  });

  getAvailableUsers(): IAvailableUser[] {
    return this._availableUsers;
  }

  getNotAddedUsers(evaluationId: number): IAvailableUser[] {
    const addedIds = new Set(this.getTargetUsers(evaluationId).map(u => u.id));
    return this._availableUsers.filter(u => !addedIds.has(u.id));
  }

  getTargetUsers(evaluationId: number, isLaunched = false): ITargetUser[] {
    const stored = this._targetUsersMap()[evaluationId];
    if (isLaunched && (!stored || stored.length === 0)) {
      return this._launchedMockUsers[evaluationId] || [];
    }
    return stored || [];
  }

  addTargetUsers(evaluationId: number, users: IAvailableUser[]): void {
    const existing = this.getTargetUsers(evaluationId);
    const existingIds = new Set(existing.map(u => u.id));
    const newUsers: ITargetUser[] = users
      .filter(u => !existingIds.has(u.id))
      .map(u => ({
        ...u,
        superiorsEvals: '0/1',
        pairsEvals: '0/2',
        progress: 'NOT STARTED' as const,
        jobAffinity: '-',
      }));
    this._targetUsersMap.update(map => ({
      ...map,
      [evaluationId]: [...existing, ...newUsers],
    }));
  }

  removeTargetUsers(evaluationId: number, userIds: number[]): void {
    const idSet = new Set(userIds);
    this._targetUsersMap.update(map => ({
      ...map,
      [evaluationId]: (map[evaluationId] || []).filter(u => !idSet.has(u.id)),
    }));
  }
}
