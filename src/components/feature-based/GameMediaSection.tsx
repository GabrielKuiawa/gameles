import { View, StyleSheet, Image, FlatList } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import useFetch from "@/hooks/useFetch";
import { Movies } from "@/types/models/Movies";
import { API_KEY, API_URL } from "../../../env";
import { GameMediaSectionProps } from "@/types/props";

export default function GameMediaSection(props: GameMediaSectionProps) {
  const { data, loading } = useFetch<Movies>(
    `${API_URL}games/${props.id}/movies?key=${API_KEY}`
  );
  const videoSource = Array.isArray(data?.results)
    ? data.results[0]?.data?.max
    : null;

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
  });
  player.pause();

  return (
    <View className="py-4">
      <FlatList
        data={props.screenshots?.results}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          videoSource != null ? (
            <VideoView
              style={[styles.midia, { marginRight: 10 }]}
              player={player}
              allowsFullscreen={false}
              requiresLinearPlayback={false}
            />
          ) : null
        }
        renderItem={({ item }) => (
          <Image
            style={styles.midia}
            source={{ uri: item.image }}
            key={item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  midia: {
    width: 325,
    height: 230,
    borderRadius: 10,
  },
});
