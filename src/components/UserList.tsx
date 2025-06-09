import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const queryClient = useQueryClient();

  // ユーザー一覧取得
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get<User[]>('/api/users');
      return response.data;
    },
  });

  // ユーザー削除
  const deleteMutation = useMutation({
    mutationFn: async (userId: number) => {
      await axios.delete(`/api/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  // ユーザー作成
  const createMutation = useMutation({
    mutationFn: async (newUser: Omit<User, 'id'>) => {
      const response = await axios.post<User>('/api/users', newUser);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleCreateUser = () => {
    const name = prompt('ユーザー名を入力してください:');
    const email = prompt('メールアドレスを入力してください:');

    if (name && email) {
      createMutation.mutate({ name, email });
    }
  };

  const handleDeleteUser = (userId: number) => {
    if (window.confirm('このユーザーを削除しますか？')) {
      deleteMutation.mutate(userId);
    }
  };

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>ユーザー一覧 (MSW モック)</h2>
      <button
        onClick={handleCreateUser}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        新しいユーザーを追加
      </button>

      {users && users.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{user.name}</h3>
                <p style={{ margin: 0, color: '#666' }}>{user.email}</p>
              </div>
              <button
                onClick={() => handleDeleteUser(user.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>ユーザーが見つかりません。</p>
      )}
    </div>
  );
};

export default UserList;
