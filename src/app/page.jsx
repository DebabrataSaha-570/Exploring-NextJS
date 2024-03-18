import Link from "next/link";
import Counter from "../components/Counter/Counter";

export const metadata = {
  title: "ABC || Home",
  description: "This is home page",
};

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "force-cache", //data will be stored in cdn
    next: {
      revalidate: 5, // will fetch data every 5 seconds and agin build the project and make the changes at the particular part
    },
  });
  const data = await res.json();

  // throw new Error("Error From Home page");
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-5">
        <Counter></Counter>
      </div>

      <div className="my-5">
        <h2 className="text-3xl  text-center my-5">
          Users Data : {data.length}{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.email}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-5">
          <Link href="/all-users">
            <button className="btn btn-primary">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
