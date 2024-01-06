import { City, Launch, Launchpad, Rocket } from "../../Domain/types";

export const resolvers = {
  Launch: {
    rocket: async (
      { rocket }: { rocket: string },
    ) => {
      const rocketData: Rocket = await fetch(
        `https://api.spacexdata.com/v4/rockets/${rocket}`
      ).then((res) => res.json()) as Rocket;

      return rocketData;
    },
    launchpad: async (
      { launchpad }: { launchpad: string },
    ) => {
      const launchpadData: Launchpad = await fetch(
        `https://api.spacexdata.com/v4/launchpads/${launchpad}`
      ).then((res) => res.json()) as Launchpad;

      return launchpadData;
    },
  },
  Launchpad: {
    city: async (
      { latitude, longitude }: { latitude: number, longitude: number },
    ) => {
      const city: City = await fetch(
        `https://api.geodatasource.com/city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${latitude}&lng=${longitude}`
      ).then((res) => res.json()) as City;

      return city;
    },
  },
  Query: {
    launch: async (
      parent: any,
      { id }: { id: string },
    ) => {
      const launch: Launch = await fetch(`https://api.spacexdata.com/v4/launches/${id}`).then(
        (res: Response) => res.json()
      ) as Launch;

      return launch;
    },
  },
};
