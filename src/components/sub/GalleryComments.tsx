import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { USERS_COMMENTS } from "@/constants/utils";

function GalleryContent() {
  return (
    <>
      <div className="flex justify-center mt-[-250px]">
        <Carousel className="w-full max-w-xl" >
          <CarouselContent>
            {USERS_COMMENTS.map((user, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex items-center justify-center p-6 bg-transparent outline border rounded text-[15px] text-white">
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt="@shadcn" className="h-10 rounded-full min-w-10 me-2" />
                        </Avatar>
                        <div className="space-y-2">
                          <strong>{user.name}</strong>
                          <p>{user.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
      </div>
    </>
  );
}

export default GalleryContent;
