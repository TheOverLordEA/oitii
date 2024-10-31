"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // In practice, you should validate your inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  // Check if the user exists in the users table
  // const { data: existingUser, error: fetchError } = await supabase
  //   .from("users")
  //   .select("*")
  //   .eq("email", email)
  //   .single(); // Fetch single user by email

  // const { error: updateError } = await supabase
  //   .from("users")
  //   .update({ last_signed_in: new Date() })
  //   .eq("id", data.user.id);

  // if (fetchError && fetchError.code !== "PGRST116") {
  //   // PGRST116 means no rows found
  //   console.error("Error fetching user:", fetchError.message);
  //   return;
  // }

  // if (updateError) {
  //   console.error("Error updating last signed in:", updateError.message);
  // }

  revalidatePath("/", "layout");
  return { success: true, user: data.user };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // In practice, you should validate your inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    revalidatePath("/", "layout");
    return { error: error.message };
  }

  // Check if email confirmation is required
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    return {
      success: true,
      message: "Please check your email to confirm your account.",
    };
  }

  revalidatePath("/", "layout");
  return { success: true, user: data.user };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

// export async function login(formData: FormData) {
//   const supabase = createClient();

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }

// export async function signup(formData: FormData) {
//   const supabase = createClient();

// type-casting here for convenience
// in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }
