"use client";

import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditChannel } from "@/components/modals/edit-channel-modal";
import { LeaverServer } from "@/components/modals/leave-server-modal";
import { DeleteServer } from "@/components/modals/delete-server-modal";
import { DeleteChannel } from "@/components/modals/delete-channel-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { ManageMembersModal } from "@/components/modals/manage-members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel";
import { MessageFileModal } from "../modals/message-file-modal";
import { DeleteMessage } from "@/components/modals/delete-message-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <InviteModal />
      <DeleteServer />
      <DeleteChannel />
      <LeaverServer />
      <EditServerModal />
      <CreateServerModal />
      <ManageMembersModal />
      <CreateChannelModal />
      <EditChannel />
      <MessageFileModal/>
      <DeleteMessage/>
    </>
  );
}
