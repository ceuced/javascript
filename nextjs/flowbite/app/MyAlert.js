"use client";
import { Alert } from "flowbite-react";
import { useState } from "react";
export default function MyAlert() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <Alert color="info" onDismiss={() => setVisible(false)}>
          Alert!
        </Alert>
      )}
    </>
  );
}
