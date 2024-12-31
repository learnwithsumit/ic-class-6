"use server";

import connectMongo from "@/dbConnect/dbConnect";
import User from "@/models/User";
import wait from "@/utils/wait";
import { revalidatePath } from "next/cache";

export const addUser = async (status, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    const userData = {
        name,
        email,
    };

    // connect with mongoDB
    await connectMongo();

    // save user data
    await new User(userData).save();

    // fake delay
    await wait(2000);

    revalidatePath("/");
};

export const getUsers = async () => {
    await connectMongo();

    const users = await User.find();
    return users;
};
