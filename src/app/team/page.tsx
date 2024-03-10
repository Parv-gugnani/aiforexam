import MaxWidthWrapper from "@/components/MaxWidthWapper";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const TeamPage = () => {
  return (
    <div>
      <h1 className="text-center m-8">Team page</h1>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <HoverCard>
          <HoverCardTrigger>Parv gugnani</HoverCardTrigger>
          <HoverCardContent>This is just in working</HoverCardContent>
        </HoverCard>
        {/* second */}
        <div className="mr-2 p-10">
          <HoverCard>
            <HoverCardTrigger>Vaibhav</HoverCardTrigger>
            <HoverCardContent>This is just in working</HoverCardContent>
          </HoverCard>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TeamPage;
