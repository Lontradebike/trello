package reacttrello

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class ListsController {

    ListsService listsService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond listsService.list(params), model:[listsCount: listsService.count()]
    }

    def show(Long id) {
        respond listsService.get(id)
    }

    @Transactional
    def save(Lists lists) {
        if (lists == null) {
            render status: NOT_FOUND
            return
        }
        if (lists.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond lists.errors
            return
        }

        try {
            listsService.save(lists)
        } catch (ValidationException e) {
            respond lists.errors
            return
        }

        respond lists, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Lists lists) {
        if (lists == null) {
            render status: NOT_FOUND
            return
        }
        if (lists.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond lists.errors
            return
        }

        try {
            listsService.save(lists)
        } catch (ValidationException e) {
            respond lists.errors
            return
        }

        respond lists, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || listsService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
