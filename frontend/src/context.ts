import { createContext, useContext } from 'react'

export enum Roles {
  Admin,
  User
}

export type RoleContextType = {
	role: Roles
}

export const RoleContext = createContext<RoleContextType>({
  role: Roles.User
})

export const useRoleContext = () => {
  const context = useContext(RoleContext);
  return context
}