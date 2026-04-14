import { Container, Typography, Paper } from '@mui/material';

// nội dung trang web
function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      {/* maxWidth="sm" giới hạn chiều rộng ở mức nhỏ */}
      {/* style={{ marginTop: '50px' }} đẩy khối cách mép trình duyệt 50px */}
      
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px' }}>
        {/* elevation={3} độ bóng mức 3 */}
        {/* style={{ padding: '30px' }} tạo khoảng trống cách lề 30 px */}
        {/* borderRadius: '10px' bo bốn góc */}
        
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          My Shopping List
        </Typography>
        {/*variant="h4": cỡ chữ tương đương thẻ 4
        align="center" thằng này căn giữ 
        color="primary" màu xanh
        fontWeight="bold" : in đập chữ 
        gutterbottom thêm khoảng cách với dòng tiếp theo
        */}
        <Typography variant="body1" align="center" color="textSecondary">
          {/*variant="body 1" cỡ chứ mặc đinh
          align="center"
          code */}
          xin chào đây là demoo 
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;