package com.bimbiya.server.entity;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "add_to_cart")
public class AddToCart implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long cartId;

    @ManyToOne
    @JoinColumn(name = "byte_id", referencedColumnName = "package_id")
    private BytePackage bytePackage;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private SystemUser systemUser;

    @Column(name = "qty", nullable = false, length = 16)
    private String qty;

    @Column(name = "status", nullable = false, length = 16)
    private String status;

    @Column(name = "CREATED_USER", nullable = false, length = 64)
    private String createdUser;

    @Column(name = "LAST_UPDATED_USER", nullable = false, length = 64)
    private String lastUpdatedUser;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATED_TIME", nullable = false, length = 23)
    private Date createdTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LAST_UPDATED_TIME", nullable = false, length = 23)
    private Date lastUpdatedTime;

    @Column(name = "meal_name", nullable = false, length = 32)
    private String mealName;

    // Constructors, getters, setters, and other necessary methods
}
