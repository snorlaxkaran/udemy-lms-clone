import { db } from "@/lib/db";
import React from "react";
import { Suspense } from "react";
import { Categories } from "./_components/categories";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CoursesList } from "@/components/courses-list";
import dynamic from "next/dynamic";

const SearchInput = dynamic(() => import("@/components/search-input"), {
  ssr: false, // Disable server-side rendering for this component
});

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const BrowsePage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchInput />
        </Suspense>
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default BrowsePage;
