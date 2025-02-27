import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background:#b45573;
  color: white;
  font-size: 14px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background:#86404a;
  }
`;

const Pagination = ({ page, setPage }: { page: number; setPage: (p: number) => void }) => {
  return (
    <PaginationContainer>
      {page > 1 && <PageButton onClick={() => setPage(page - 1)}>← Föregående</PageButton>}
      <PageButton onClick={() => setPage(page + 1)}>Nästa →</PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
