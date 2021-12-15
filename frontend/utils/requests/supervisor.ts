export interface SupervisorType {
  type: string;
  name: string;
  entity: string;
  entityType: string;
}

// TODO fake api
export const Supervisor = {
  getSupervisor: async (username: string, password: string) => {
    return new Promise<SupervisorType>((resolve, _reject) =>
      setTimeout(
        () =>
          resolve({
            entity: 'DIV_TURING',
            entityType: 'Centro de evaluación',
            name: 'Orlando Canepa Torres',
            type: 'Evaluador',
          }),
        2000,
      ),
    );
  },
};
