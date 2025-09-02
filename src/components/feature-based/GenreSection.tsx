import React from 'react'
import { useSafeNavigation } from '@/hooks/useSafeNavigation';
import { gameService } from '@/service/gameService';
import HorizontalInfiniteList from '../shared/HorizontalInfiniteList';
import { Game } from '@/types/models/Game';
import CardGame from './CardGame';

export default function GenreSection({ id }: { id: number | string }) {
  const navigateTo = useSafeNavigation();
  const { data, loadMore } = gameService.usePaginatedGamesBy("genres", id.toString());

  return (
    <HorizontalInfiniteList<Game>
      data={data}
      loadMore={loadMore}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardGame
          {...item}
          onPress={() =>
            navigateTo({
              pathname: "/GameDetails/[id]",
              params: { id: item.id },
            })
          }
        />
      )}
    />
  );
}
