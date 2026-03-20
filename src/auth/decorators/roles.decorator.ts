import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles.guard';

export const ROLES_KEY = 'roles';

export type AppRole = 'ADMIN' | 'DOC_MANAGER' | 'PRICE_EDITOR';

export const Roles = (...roles: AppRole[]) =>
  applyDecorators(SetMetadata(ROLES_KEY, roles), UseGuards(RolesGuard));
