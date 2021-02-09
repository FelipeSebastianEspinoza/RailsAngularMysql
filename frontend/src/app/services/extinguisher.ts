export class Extinguisher {
  constructor(
    id = '',
    name = '',
    status = '',
    charge,
    expiration,
    active = '',
    created_at,
    updated_at
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.charge = charge;
    this.expiration = expiration;
    this.active = active;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
  id: string;
  name: string;
  status: string;
  charge: Date;
  expiration: Date;
  active: string;
  created_at: Date;
  updated_at: Date;
}
