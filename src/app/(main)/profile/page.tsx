import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { capitalizeFirstLetter } from "@/lib/utils";
import { api } from "@/trpc/server";

export default async function ProfilePage() {
  const profile = await api.profiles.getCurrent.query();

  if (!profile) return null;

  return (
    <div className="flex w-full justify-center ">
      <Card className="mt-12 w-full max-w-xl">
        <CardHeader>
          <CardTitle>
            {profile.firstName} {profile.firstName}
          </CardTitle>
          <CardDescription>{profile.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Role: {capitalizeFirstLetter(profile.role)}</p>
        </CardContent>
        <CardContent className="flex items-center">
          <p className="pr-1">Skills:</p>
          {profile.skills.map((skill, index) => (
            <p
              key={index}
              className="border-border w-min rounded-full border px-2 py-0.5"
            >
              {skill}
            </p>
          ))}
        </CardContent>
        <CardContent>
          <p>Bio: {profile.bio}</p>
        </CardContent>
        <div className="flex">
          <CardContent>
            <p>Github: {profile.github}</p>
          </CardContent>
          <CardContent>
            <p>Linkedin: {profile.linkedin}</p>
          </CardContent>
          <CardContent>
            <p>Website: {profile.website}</p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
