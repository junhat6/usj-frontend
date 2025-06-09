import { http, HttpResponse, delay } from 'msw';

// 環境変数から遅延時間を取得
const getDelay = () => {
  const delayMs = import.meta.env.VITE_MSW_DELAY;
  return delayMs ? parseInt(delayMs, 10) : 0;
};

// ユーザー型の定義
interface User {
  id: number;
  name: string;
  email: string;
}

type CreateUserRequest = Omit<User, 'id'>;
type UpdateUserRequest = Partial<CreateUserRequest>;

export const handlers = [
  // サンプルAPIエンドポイント - 必要に応じて変更してください
  http.get('/api/users', async () => {
    const delayMs = getDelay();
    if (delayMs > 0) {
      await delay(delayMs);
    }

    return HttpResponse.json<User[]>([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
  }),

  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json<User>({
      id: Number(id),
      name: `User ${id}`,
      email: `user${id}@example.com`,
    });
  }),

  http.post('/api/users', async ({ request }) => {
    const newUser = (await request.json()) as CreateUserRequest;
    return HttpResponse.json<User>({ id: Date.now(), ...newUser }, { status: 201 });
  }),

  http.put('/api/users/:id', async ({ params, request }) => {
    const { id } = params;
    const updatedUser = (await request.json()) as UpdateUserRequest;
    return HttpResponse.json<User>({
      id: Number(id),
      name: updatedUser.name || `User ${id}`,
      email: updatedUser.email || `user${id}@example.com`,
    });
  }),

  http.delete('/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json({ message: `User ${id} deleted successfully` }, { status: 200 });
  }),
];
