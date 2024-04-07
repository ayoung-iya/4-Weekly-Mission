import { USER_ID, totalFolderId } from '@/util/constants';
import { Folder, FolderAPI, LinkTypes, LinkAPITypes, User } from '@/types/types';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

async function getAPI(query: string) {
  const response = await fetch(`${BASE_URL}/${query}`);

  if (!response?.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }

  const body = await response.json();

  return body;
}

export async function getSampleFolder() {
  const response = await getAPI('sample/folder');
  const folders = response.folder;

  return folders;
}

export function getSampleUser() {
  return getAPI('sample/user');
}

export async function getUser(): Promise<User> {
  const response = await getAPI('users/1');
  const data = response.data[0];

  const parsedData = { ...data, id: String(data.id), imageSource: data['image_source'], authId: data['auth_id'] };
  return parsedData;
}

export async function getUserFolders(): Promise<Folder[]> {
  const response = await getAPI(`users/4/folders`);
  const parsedData = response.data.map(({ id, created_at, user_id, ...rest }: FolderAPI) => ({
    ...rest,
    id: String(id),
    createdAt: created_at,
    userId: user_id,
  }));

  return parsedData;
}

export async function getUserLinks(id: string): Promise<LinkTypes[]> {
  const query = id === totalFolderId ? `users/${USER_ID}/links` : `users/${USER_ID}/links?folderId=${id}`;
  const response = await getAPI(query);

  const parsedData = response.data.map(({ id, created_at, image_source, ...rest }: LinkAPITypes) => ({
    ...rest,
    id: String(id),
    createdAt: created_at,
    imageSource: image_source,
  }));

  return parsedData;
}
