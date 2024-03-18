import Image from "next/image";

const AllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", //data will be load on every user request. Data will not be cached.
  });
  const users = await res.json();

  //   console.log("data", users);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl text-center my-4"> All Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
