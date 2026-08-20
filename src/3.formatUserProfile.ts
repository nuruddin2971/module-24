// type User = {
//   name: string;
//   age: number;
//   city: string;
// };

// --------------Both type or interface can use-----------------

interface User {
  name: string;
  age: number;
  city: string;
}

const formatUserProfile = (user: User): string => {
  return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
};

console.log(
  formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
  }),
);

console.log(
  formatUserProfile({
    name: "Utsho",
    age: 26,
    city: "Chattogram",
  }),
);
