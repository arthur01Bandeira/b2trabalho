import AsyncStorage from '@react-native-async-storage/async-storage';


export type Item = {
id: string;
title: string;
description?: string;
};


const STORAGE_KEY = '@my_app_items_v1';


export async function getItems(): Promise<Item[]> {
const raw = await AsyncStorage.getItem(STORAGE_KEY);
return raw ? JSON.parse(raw) : [];
}


export async function saveItems(items: Item[]) {
await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}


export async function addItem(item: Item) {
const items = await getItems();
items.unshift(item);
await saveItems(items);
}


export async function removeItem(id: string) {
const items = await getItems();
await saveItems(items.filter(i => i.id !== id));
}