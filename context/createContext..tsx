import { createContext } from 'react';
import { Folder, Link } from '@/types/types';

export const FoldersContext = createContext<Folder[]>([]);

export const LinkListContext = createContext<Link[]>([]);