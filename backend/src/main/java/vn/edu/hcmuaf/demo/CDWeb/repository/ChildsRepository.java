package vn.edu.hcmuaf.demo.CDWeb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hcmuaf.demo.CDWeb.entity.Childs;

@Repository
public interface ChildsRepository extends JpaRepository<Childs, Long> {
}
