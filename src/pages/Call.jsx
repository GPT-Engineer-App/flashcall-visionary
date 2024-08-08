import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Phone, Mic, MicOff, Camera, CameraOff } from 'lucide-react';

const Call = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  const handleStartCall = () => {
    setIsCalling(true);
    // TODO: Implement call start logic
  };

  const handleEndCall = () => {
    setIsCalling(false);
    // TODO: Implement call end logic
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // TODO: Implement mute/unmute logic
  };

  const toggleCamera = () => {
    setIsCameraOff(!isCameraOff);
    // TODO: Implement camera on/off logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Video Call</CardTitle>
          <CardDescription className="text-center">Start a new call or join an existing one</CardDescription>
        </CardHeader>
        <CardContent>
          {!isCalling ? (
            <div className="space-y-4">
              <Input placeholder="Enter call ID or username" />
              <Button className="w-full" onClick={handleStartCall}>
                <Video className="mr-2 h-4 w-4" /> Start Call
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                {isCameraOff ? (
                  <CameraOff className="h-12 w-12 text-gray-400" />
                ) : (
                  <p className="text-gray-400">Camera Feed</p>
                )}
              </div>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={toggleMute}>
                  {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button variant="outline" onClick={toggleCamera}>
                  {isCameraOff ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
                </Button>
                <Button variant="destructive" onClick={handleEndCall}>
                  <Phone className="h-4 w-4" /> End Call
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Call;
