"use client";

import { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  });
};

export default BootstrapClient;
