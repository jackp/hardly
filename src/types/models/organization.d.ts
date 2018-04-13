export interface Organization {
  id: string;
  name?: string;
}

export interface OrganizationMap {
  [name: string]: Organization;
}
