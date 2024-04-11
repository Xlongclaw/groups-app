import NavigationBar from "@/components/navigation-bar";
import HeroSection from "@/containers/hero-section";
import PostsSection from "@/containers/posts-section";

export default function GroupScreen() {
  return (
    <div>
      <NavigationBar />
      <HeroSection/>
      <PostsSection/>
    </div>
  );
}
