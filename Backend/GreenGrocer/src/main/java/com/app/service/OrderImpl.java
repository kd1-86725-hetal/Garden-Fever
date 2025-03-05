package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DeliveryBoyDao;
import com.app.dao.OidDao;
import com.app.dao.OrderDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dao.UserDao;
import com.app.dto.OrdersDTO;
import com.app.entities.Bucket;
import com.app.entities.DeliveryBoy;
import com.app.entities.Oid;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;

@Service
@Transactional
public class OrderImpl implements OrderInterface {

	@Autowired
	private OrderDao orderDao;
	@Autowired
	private ProductDao prodDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private SellerDao sellerDao;
	@Autowired
	private OidDao oDao;
	
	
	@Override
	public Orders getOrderById(Long id) {
		// TODO Auto-generated method stub
		Orders order = orderDao.findById(id).orElseThrow();
		if(order!=null)
		{
			return order;
		}
		return null;
	}
	
	@Override
	public String addNewOrder(Long userId, Orders order)
	{	
		orderDao.save(order);
		return "Order Placed!!!!!";
	}


	@Override
	public String addOrderList(List<OrdersDTO> orders) {
		// TODO Auto-generated method stub
		Oid oid = new Oid();
		for (OrdersDTO ordersDTO : orders) {
			Long uid = ordersDTO.getUid();
			oid.setUid(uid);
		}
		oDao.save(oid);
		
		Long oid1 = oid.getOid();
		
		for (OrdersDTO orderDto : orders) {
			Product prod = prodDao.findById(orderDto.getPid()).orElseThrow();
			Seller seller = sellerDao.findById(orderDto.getSid()).orElseThrow();
			User user = userDao.findById(orderDto.getUid()).orElseThrow();
			Orders order = new Orders();
			order.setOid(oid1);
			order.setOdate(LocalDate.now());
			order.setProduct(prod);
			order.setSeller(seller);
			order.setUser(user);
			order.setStatus("pending");
			int quantity = orderDto.getQuantity();
			int price = prod.getPrice();
			double bill = price*quantity;
			order.setBill(bill);
			order.setQuantity(orderDto.getQuantity());
			int updatedQuantity = prod.getAvailableQuantity() - quantity;
			prod.setAvailableQuantity(updatedQuantity);
			prodDao.save(prod);
			orderDao.save(order);
		}
		return "All order placed";
	}
	
	@Override
	public String deleteOrderById(Long oid) {
		Orders order = orderDao.findById(oid).orElseThrow();
		orderDao.delete(order);
		return "Order Deleted Successfully!!!!";
	}
	
	@Override
	public String confirmOrder(List<Bucket> bucket) {
		Oid oid = new Oid();
		for (Bucket b : bucket) {
			Long uid = b.getUser().getUid();
			oid.setUid(uid);
		}
		oDao.save(oid);
		
		Long oid1 = oid.getOid();
		
		for (Bucket b : bucket) {
			Product prod = prodDao.findById(b.getProduct().getPid()).orElseThrow();
			Seller seller = sellerDao.findById(b.getSeller().getSid()).orElseThrow();
			User user = userDao.findById(b.getUser().getUid()).orElseThrow();
			Orders order = new Orders();
			order.setOid(oid1);
			order.setOdate(LocalDate.now());
			order.setProduct(prod);
			order.setSeller(seller);
			order.setUser(user);
			order.setStatus("pending");
			int quantity = b.getQuantity();
			int price = prod.getPrice();
			double bill = price*quantity;
			order.setBill(bill);
			order.setQuantity(b.getQuantity());
			int updatedQuantity = prod.getAvailableQuantity() - quantity;
			prod.setAvailableQuantity(updatedQuantity);
			prodDao.save(prod);
			orderDao.save(order);
		}
		return "All order placed";

	}

	@Override
	public void statusCompleted(Long oid) {
		// TODO Auto-generated method stub
		List<Orders> order = orderDao.findByOid(oid);
		for (Orders orders : order) {
			orders.setStatus("Completed");}
		}
	
		
	public List<Orders> userAllOrders(Long uid) {
		// TODO Auto-generated method stub
		List<Orders> orders = orderDao.findByUserUid(uid);
		return orders;
	}

	@Override
	public List<Orders> sellerPending(Long sid) {
		// TODO Auto-generated method stub
		List<Orders> orders = orderDao.findBySellerSidAndStatus(sid, "pending");
		return orders;
	}

	@Override
	public List<Orders> sellerCompleted(Long sid) {
		// TODO Auto-generated method stub
		List<Orders> orders = orderDao.findBySellerSidAndStatus(sid, "Completed");
		return orders;
	}
}
