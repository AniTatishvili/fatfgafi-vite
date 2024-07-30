import React from "react";
import { SubHeader } from "../../components/home/sub-header";
import { MainSlider } from "../../components/home/main-slider";
import { Topics } from "../../components/home/topics";
import { LatestNews } from "../../components/home/latest-news";
import { KeyContent } from "../../components/home/key-content";
import { Countries } from "../../components/home/countries";
import { AssociateMembers } from "../../components/home/associate-members";

export const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SubHeader />
      <MainSlider />
      <Topics />
      <LatestNews />
      <KeyContent />
      <Countries />
      <AssociateMembers />
    </main>
  );
};
