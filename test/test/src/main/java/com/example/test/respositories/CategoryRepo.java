package com.example.test.respositories;

import com.example.test.models.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CategoryRepo extends JpaRepository<Categories,Long> {

    @Transactional  //Đảm bảo rằng thao tác được thực hiện trong một giao dịch.
    @Modifying //Chỉ định rằng đây là một truy vấn sửa đổi dữ liệu (DELETE/UPDATE).
    @Query("DELETE FROM Categories c WHERE c.postId = :postId") //Sử dụng JPQL để thực hiện xóa tất cả các category có postId tương ứng.
    void deleteByPostId(Long postId);
}
