"use client";

import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map(({ id, first_name, avatar, email }) => (
        <Link href={`/users/${id}`} key={id}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div className="flex items-center">
              <h5 className="font-bold">
                {id} {first_name} -
              </h5>
              <p className="text-slate-100 ml-2">{email}</p>
              <img
                src={avatar}
                alt={first_name}
                className="rounded-full w-20 ml-4"
              />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
