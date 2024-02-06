"use client";

import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { LeaverServer } from "@/components/modals/leave-server-modal";
import { DeleteServer } from "@/components/modals/delete-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { ManageMembersModal } from "@/components/modals/manage-members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel";

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
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <ManageMembersModal />
      <CreateChannelModal />
      <LeaverServer />
      <DeleteServer/>
    </>
  );
}
