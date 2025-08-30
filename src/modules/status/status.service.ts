export class StatusService {
  async getStatus() {
    return { status: "OK" };
  }

  async getHealth() {
    return { health: "healthy" };
  }
}
