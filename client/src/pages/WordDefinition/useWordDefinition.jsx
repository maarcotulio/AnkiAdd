import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import useSearch from "../../hooks/useSearch";

export default function useWordDefinition() {
  const [def, setDef] = useState("Loading...");
  const { word } = useParams();
  const { AddToAnki, GetWordDefinition } = useSearch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDefinition() {
      const definition = await GetWordDefinition(word, "en");
      setIsLoading(false);
      setDef(definition);
    }

    fetchDefinition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  async function AddWordToAnki() {
    setIsLoading(true);
    try {
      await AddToAnki(word);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, def, AddWordToAnki, word };
}

useWordDefinition.prototype = {
  isLoading: PropTypes.bool.isRequired,
  def: PropTypes.string.isRequired,
  AddWordToAnki: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
};
