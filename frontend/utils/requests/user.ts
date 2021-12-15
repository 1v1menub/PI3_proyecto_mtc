export interface UserType {
  name: string;
  type: string;
  docType: string;
}

// TODO fake api
export const User = {
  getUser: async (dni: string) => {
    return new Promise<UserType>((resolve, _reject) =>
      setTimeout(
        () =>
          resolve({
            name: 'Luis Alfonso Berrospi Rodriguez',
            type: 'A1',
            docType: 'DNI',
          }),
        2000,
      ),
    );
  },
};
