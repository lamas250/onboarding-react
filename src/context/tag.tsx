import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosClient } from '../infra/http/axios-http-client';

export interface TagProps {
  id: string;
  tag: string;
  value: number;
  type: string;
  timestamp: number;
}

export type TagContextType = {
  tags: TagProps[];
  fetchTags: () => Promise<void>;
};

const TagContext = createContext<TagContextType | null>(null);

const TagProvider = ({ children }: any) => {
  const [tags, setTags] = useState<TagProps[]>([]);

  const fetchTags = async () => {
    const res = await axiosClient.get('/onboarding');
    setTags(res.data);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <TagContext.Provider
      value={{
        tags,
        fetchTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

const useTag = () => {
  const context = useContext(TagContext);

  return context;
};

export { TagProvider, useTag };
