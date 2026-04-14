import React, { useState } from 'react';
// Import thêm ô tích, nút bấm vô hình bao quanh icon, icon thùng rác
import { Container, Typography, Paper, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// Import thêm icon dấu cộng và trừ cho tính năng số lượng
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function App() {
  // KHU VỰC LƯU TRỮ DỮ LIỆU
  
  // items: Mảng chứa danh sách. every món đồ là một đối tượng chứa  tên và trạng thái mua hay chưa
  const [items, setItems] = useState([]); 
  // inputValue: Ghi nhớ những chữ đang gõ vào ô trống
  const [inputValue, setInputValue] = useState('');

  // KHU VỰC XỬ LÝ LOGIC

  // Hàm 1: Thêm món hàng
  const handleAddItem = () => {
    const newName = inputValue.trim(); // Lấy giá trị và cắt dấu cách thừa
    
    if (newName === '') return; // Chống việc bấm Add khi chưa nhập gì

    //  Chặn nhập trùng 
    // Dùng hàm .some() để kiểm tra xem có phần tử nào trùng tên không
    const isDuplicate = items.some((item) => item.name.toLowerCase() === newName.toLowerCase());
    
    if (isDuplicate) {
      alert(`Món "${newName}" đã có trong danh sách rồi nhé!`); // Hiện thông báo cảnh báo
      return; // Dừng hàm lại ngay tại đây, không chạy xuống phần thêm món bên dưới nữa
    }
    

    // Đổ danh sách cũ ra (...items), sau đó nhét thêm món mới vào cuối danh sách
    // Thêm thuộc tính quantity: 1 (số lượng mặc định khi mới thêm là 1)
    setItems([...items, { name: newName, completed: false, quantity: 1 }]);
    setInputValue(''); // Reset ô nhập liệu về rỗng
  };

  // Hàm 2: Đánh dấu đã mua / chưa mua 
  const handleToggleComplete = (index) => {
    // Nguyên tắc của React: Không sửa trực tiếp biến gốc. Ta copy ra một danh sách mới.
    const newItems = [...items];
    // Lật ngược trạng thái 
    newItems[index].completed = !newItems[index].completed;
    // Cập nhật lại danh sách mới vào bộ nhớ
    setItems(newItems);
  };

  // Hàm 3: Xóa món hàng khỏi danh sách
  const handleDeleteItem = (index) => {
    // Dùng hàm .filter() để quét qua mảng. Nó sẽ giữ lại tất cả các món đồ KHÔNG trùng với vị trí 'index' vừa bấm xóa.
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Hàm 4: Tăng số lượng món hàng
  const handleIncreaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  // Hàm 5: Giảm số lượng món hàng (chặn không cho giảm dưới 1)
  const handleDecreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  // Tính toán số lượng cho tính năng đếm
  // Dùng hàm reduce() để cộng dồn tổng số lượng (quantity) của từng món thay vì chỉ đếm số dòng
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const completedItems = items.filter((item) => item.completed).reduce((total, item) => total + item.quantity, 0);

  //  KHU VỰC GIAO DIỆN UI
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px' }}>
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          My Shopping List
        </Typography>

        {/* Hiển thị số lượng đếm */}
        <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>
          Tổng số lượng cần mua: {totalItems} | Đã mua: {completedItems}
        </Typography>
        
        {/* KHU VỰC NHẬP LIỆU */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', marginTop: '20px' }}>
          <TextField 
            fullWidth 
            label="Nhập tên món hàng..." 
            variant="outlined" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            /* Enter thì gọi luôn hàm thêm hàng */
            onKeyPress={(e) => e.key === 'Enter' ? handleAddItem() : null} 
          />
          <Button variant="contained" color="primary" onClick={handleAddItem}>
            Add
          </Button>
        </div>

        {/*  KHU VỰC HIỂN THỊ DANH SÁCH */}
        <List>
          {items.map((item, index) => (
            <ListItem 
              key={index} 
              divider
              /* nút xóa nằm bên phải, giờ được nhóm cùng nút tăng giảm số lượng */
              secondaryAction={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Nút Trừ */}
                  <IconButton onClick={() => handleDecreaseQuantity(index)} size="small" color="primary">
                    <RemoveIcon />
                  </IconButton>
                  
                  {/* Hiển thị con số số lượng */}
                  <Typography variant="body1" style={{ margin: '0 8px', fontWeight: 'bold' }}>
                    {item.quantity}
                  </Typography>
                  
                  {/* Nút Cộng */}
                  <IconButton onClick={() => handleIncreaseQuantity(index)} size="small" color="primary">
                    <AddIcon />
                  </IconButton>

                  {/* Nút Xóa (thùng rác) */}
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(index)} color="error" style={{ marginLeft: '15px' }}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              }
            >
              {/* Ô vuông check đã mua  bên trái */}
              <Checkbox
                edge="start"
                checked={item.completed} // Hiển thị dấu tích dựa vào dữ liệu có true hay không
                onChange={() => handleToggleComplete(index)} // Khi click vào thì gọi hàm lật trạng thái
              />
              
              {/* Nội dung chữ của món hàng */}
              <ListItemText 
                primary={item.name} 
                /* nếu completed là true thì gạch tên gạch ngang chữ vs làm mờ màu đi */
                style={{ 
                  textDecoration: item.completed ? 'line-through' : 'none',
                  color: item.completed ? 'gray' : 'black'
                }} 
              />
            </ListItem>
          ))}
        </List>

      </Paper>
    </Container>
  );
}

export default App;