import { User } from "@/typings";
import Image from "next/image";
import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://64c4022067cfdca3b6608e88.mockapi.io/user/${searchTerm}`,
  );

  const data: User = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);
  return (
    <div>
      <p className="text-sm text-[#ebebeb]">You searched for: {searchTerm}</p>

      {
        <ol className="space-y-5 py-5">
          <li className="font-bold">{searchResults.name}</li>
          <Image
            src={searchResults.avatar}
            alt="avatar"
            width={50}
            height={50}
          />
          <li>{searchResults.email}</li>
          <li>{searchResults.bio}</li>
        </ol>
      }
    </div>
  );
}

export default SearchResults;
