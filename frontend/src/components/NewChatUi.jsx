import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import placeholder from "../assets/placeholder.svg";

import {
  Menu,
  MessageCircle,
  Phone,
  Video,
  Search,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function NewChatUi() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="flex h-screen bg-purple-100 text-gray-800">
      {/* Left Sidebar */}
      <div
        className={`w-80 bg-white flex-shrink-0 ${
          showSidebar ? "block" : "hidden"
        } md:block shadow-lg`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Avatar>
              <AvatarImage
                src={placeholder} // Assuming you've imported it as shown earlier
                alt="User"
                style={{ height: "40px", width: "40px" }}
              />

              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-pink-500 hover:text-pink-600 hover:bg-pink-100"
              >
                <MessageCircle />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-500 hover:text-green-600 hover:bg-green-100"
              >
                <Phone />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-500 hover:text-blue-600 hover:bg-blue-100"
              >
                <Video />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-8 bg-gray-100 focus:bg-white"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-120px)]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center p-4 hover:bg-purple-50 cursor-pointer"
            >
              <Avatar className="mr-3">
                <AvatarImage
                  src={placeholder} // Assuming you've imported it as shown earlier
                  alt={`Contact ${i + 1}`}
                  style={{ height: "40px", width: "40px" }}
                />
                <AvatarFallback>{i + 1}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Contact {i + 1}</div>
                <div className="text-sm text-gray-500">Last message...</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2 text-purple-500"
              onClick={toggleSidebar}
            >
              <Menu />
            </Button>
            <Avatar className="mr-3">
              <AvatarImage
                src={placeholder} // Assuming you've imported it as shown earlier
                alt="Current Chat"
                style={{ height: "40px", width: "40px" }}
              />
              <AvatarFallback>CC</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Current Chat</div>
              <div className="text-sm text-green-500">Online</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-purple-500"
            onClick={toggleDetails}
          >
            <ChevronLeft className={showDetails ? "hidden" : "block"} />
            <ChevronRight className={showDetails ? "block" : "hidden"} />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 px-[10%] bg-purple-50">
          {/* Chat messages would go here */}
          <div className="bg-white rounded-lg p-3 mb-4 w-fit shadow">
            Hello! How are you?
          </div>
          <div className="bg-purple-300 rounded-lg p-3 mb-4 w-fit ml-auto shadow">
            I'm doing great, thanks for asking!
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <Input
              placeholder="Type a message"
              className="flex-1 mr-2 bg-gray-100 focus:bg-white"
            />
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              <Send />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Details) */}
      <div
        className={`w-80 bg-white flex-shrink-0 ${
          showDetails ? "block" : "hidden"
        } shadow-lg`}
      >
        <div className="p-4">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage
              src="../assets/placeholder.svg?height=96&width=96"
              alt="Contact Details"
            />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold text-center mb-2">
            Contact Name
          </h2>
          <p className="text-center text-gray-500 mb-4">Status message</p>
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
            >
              View Profile
            </Button>
            <Button
              variant="outline"
              className="w-full border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              Shared Media
            </Button>
            <Button
              variant="outline"
              className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              Search in Conversation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
