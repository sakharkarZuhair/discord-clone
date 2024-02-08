import { NextApiResponse } from "next";
import { Server, Member, Profile } from "@prisma/client";
import { Server as SocketIOServer } from "socket.io";
import { Server as NetServer, Socket } from "net";

export type ServerWithMembersWithProfile = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponserServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
