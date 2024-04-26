import NextAuth from "next-auth/next"

const handler = NextAuth({
//cleaned secure code
});

export {
    handler as GET, handler as POST
}