import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function App() {
  // "intems là một mảng, setItems cho phép mở ra và thay đồ vật bên trong. mãng dc khởi tạo rỗng[])
  const [items, setItems] = useState([]); 
  
  // "inputValue chô phép thêm vào, setInputValue cho phép nhập liệu'')
  const [inputValue, setInputValue] = useState('');

  // "Add"
  // stim cắt bỏ dấu cách 
  const handleAddItem = () => {
    
    if (inputValue.trim() === '') return;

    // Thêm món mới vào danh sách hiện tại
    // Nếu ô nhập liệu trống thì không làm gì cả
    setItems([...items, { name: inputValue.trim(), completed: false }]);
    
    // Xóa chữ trong ô nhập liệu đi để nhập món khác
    setInputValue('');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px' }}>
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          My Shopping List
        </Typography>
        
        {/* Khu vực nhập liệu */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', marginTop: '20px' }}>
          <TextField 
            fullWidth 
            label="Nhập tên món hàng..." 
            variant="outlined" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddItem}>
            Add
          </Button>
        </div>

        {/* Khu vực hiển thị danh sách */}
        <List>
          {items.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>

      </Paper>
    </Container>
  );
}

export default App;