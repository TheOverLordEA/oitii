"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
  // const formData = await req.formData
  const supabase = await createClient();

  // const {data, error} = await supabase.from()

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
}
